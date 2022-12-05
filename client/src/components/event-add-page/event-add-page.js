import { useEffect, useState } from "react";
import Select from "react-select";
import "../event-add-page/style.css";
import Header from "../ui/header/header";
import { ax, authPost } from "../../api";
import { useNavigate } from "react-router-dom";

const fetchOptions = (endpoint, setter) => ax
  .get(endpoint)
  .then(r => setter(r.data.items.map(item => ({ value: item.id, label: item.name }))))
  .catch(e => console.log(e));

const EventAddPage = () => {
  const [tagOptions, setTagOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);

  const [tags, setTags] = useState([]);
  const [department, setDepartment] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchOptions('tags', setTagOptions);
    fetchOptions('departments', setDepartmentOptions);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, description, startsAt, endsAt } =
      Object.fromEntries(new FormData(e.target));
    const event = {
      title,
      description,
      departmentId: department.value,
      startsAt,
      endsAt,
      tags: tags.map(tag => tag.value),
    };
    console.log(event);
    authPost('events', event)
      .then(navigate('/Events'))
      .catch(e => alert(e));
  };
  return (
    <div>
      <Header/>
      <form className="event-add-container" onSubmit={onSubmit}>
        <p className="event-add-header-text">Створити подію</p>
        <hr></hr>
        <p className="event-add-text">Заголовок</p>
        <input required name="title" className="input-title"></input>
        <p className="event-add-text">Опис</p>
        <textarea required name="description" className="input-container"></textarea>
        <p className="event-add-text">Кафедра</p>
        <Select name="departmentId" required options={departmentOptions} onChange={setDepartment}/>
        <div className="holding-time"><p className="event-add-text">Починається</p>
          <input required name="startsAt" type="datetime-local"></input>
          <p className="event-add-text">Закінчується</p>
          <input required name="endsAt" type="datetime-local"></input></div>
        <p className="event-add-text">Теги</p>
        <Select isMulti closeMenuOnSelect={false} name="tags" options={tagOptions} onChange={setTags}/>
        <input type="submit" className="event-add-button" value="Створити"/>
      </form>
    </div>
  );
};

export default EventAddPage;
