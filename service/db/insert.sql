INSERT INTO users.role(name) VALUES ('viewer'), ('admin');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Terri Chappelle', 'tchappelle0@com.com', '72ee94ef18e92c3bfaee67f16fdfa6abb55d24dee279f62f714b737a9466af54');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Ivie Waberer', 'iwaberer1@blinklist.com', '13d084898c7d56b345830e98e0b521021d8f757c5422ac71c94a15fb30ded444');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Saunderson Braundt', 'sbraundt2@cnbc.com', '73801b4f8a8d6aaf356dd9fa838e53cf4eaab8d6afeb9456beb5ee38415c8aba');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Fidelio Chasteau', 'fchasteau3@deviantart.com', '8199ad5a8734b525f8f990587159517b0cb54552033de2158ae5b703025cbf31');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Zsa zsa Skerratt', 'zzsa4@4shared.com', '13c8db49a760a951a69b134fc6013e6463be369ec57c033bb2426d6bccce074e');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Jyoti Seston', 'jseston5@bloglovin.com', 'b5b98becfdeba0debaf8ff624e1df56eeb27122c1058a19ffa0c8bcd7808a6dd');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Bekki Howell', 'bhowell6@devhub.com', 'd605654b046a7929a8f433d3adcda0acc0757c5f401d71126be14216aa2a6eaf');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Frederico Colliss', 'fcolliss7@smh.com.au', 'efab0a0513fd34e1939edad27e301019591e7fb8b23f6b338664942208dc25ed');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Ramsay Haythorne', 'rhaythorne8@surveymonkey.com', 'd30ad62668f01fc4b9490ef08112765436870766892df6960e44841392d39266');
insert into users.user (role_id, full_name, email, password_hash) values (1, 'Nessi Darragh', 'ndarragh9@state.tx.us', 'ea78e15f8536fcdbd36d0d2776a875f35f268587b1ed81aba3770856bcf59631');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Cindie Meek', 'cmeeka@arstechnica.com', 'c0394e0aedee72fd42634b7585c42ffd2181ceaf0e228736a60b66251876ce1e');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Cher Ragbourn', 'cragbournb@chronoengine.com', 'd8a93ad5e2637b42b0014778928a7f65de6449d1503ec03f1b4fc383d71c8f9b');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Seamus Andersson', 'sanderssonc@bloglovin.com', '1e8f13b06d822ab3c158f4f876548012d138e1220d67e902ac0411448a2dff3c');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Robbert Le Noury', 'rled@wsj.com', '07c45c42c8812ab9b4a39c8facc4c0e3f0eef115ad5ec83a6fe637f7793f3ab4');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Joelly Hardeman', 'jhardemane@wikispaces.com', 'b48d74c5f05091b809a2dd563d0e6c6d964ed3b7082e06a2fc47f4db3d3fbc37');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Dalia Silliman', 'dsillimanf@friendfeed.com', 'a718e4eaf45872070980f59ddf09cad59f06612b98559330155b03c6538a7215');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Reggie Ephson', 'rephsong@chron.com', 'df89f2723d4de47c7a48c9600241991f70dd2c4ef41fee60bcf48b495bce1766');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Cory Aberkirder', 'caberkirderh@ucla.edu', '564be9c64b2bf14aa716135ec174ce6f4833b9740ca30ef0231cd9ae1faa588a');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Hilton Slate', 'hslatei@stumbleupon.com', 'f311b3392dbdfd6ce5795536b6e38da2f584858dd687710c638a95510188b82a');
insert into users.user (role_id, full_name, email, password_hash) values (2, 'Joachim Staveley', 'jstaveleyj@wisc.edu', '85d849b41aedc8bc2139d44e128a947bc0143267b4e3ec9aed6a3b370854e496');
INSERT INTO departments.faculty(name, url, image_url, address, phone, email)
VALUES ('Faculty of Foreign Languages', 'https://lingua.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-lingua.png',
        'Universytetska Street 1/415, Lviv, 79000, Ukraine', '(+ 38 032) 239-47-16', 'lingua.faculty@lnu.edu.ua'),
       ('Faculty of Physics', 'https://physics.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-physics.png',
        'Kyryla i Mefodiya Street, 8, Lviv, 79005, Ukraine', '(+38 032) 239-41-16', 'physics.faculty@lnu.edu.ua'),
       ('Faculty of Applied Mathematics and Informatics', 'https://ami.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-ami.png',
        'Universytetska Street, 1, Lviv, 79000, Ukraine', '(+38 032) 274-01-80, 239-41-86', 'ami@lnu.edu.ua'),
       ('Faculty of Biology', 'https://bioweb.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-biology.png',
        'Mykhaila Hrushevskoho Street, 4, Lviv, 79005, Ukraine', '(+38 032) 274-03-72, 239-41-53', 'biolog@lnu.edu.ua'),
       ('Faculty of Chemistry', 'https://chem.lnu.edu.ua/index_en.htm',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-chem.png',
        'Kyryla I Mefodiya, 6, Lviv, 79005, Ukraine', '(+38 032) 260-03-91, 239-45-10', 'chemdek@lnu.edu.ua'),
       ('Faculty of Culture and Arts', 'https://kultart.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-kultart.png',
        'Valova Street,18, Lviv, 79008, Ukraine', '(+38 032) 239-41-97', 'fkultart@lnu.edu.ua'),
       ('Faculty of Economics', 'https://econom.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-econom.png',
        'Svobody Avenue, 18, Lviv, 79008, Ukraine', '(+38 032) 239-41-68', 'edean@lnu.edu.ua'),
       ('Faculty of Electronics and computer technologies', 'https://electronics.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-electronics.png',
        'Drahomanova Street, 50, Lviv, 79005, Ukraine', '(+38 032) 261-14-91, 239-47-24, 239-41-82',
        'electronics.faculty@lnu.edu.ua'),
       ('Faculty of Financial Management and Business', 'https://financial.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/11/logo-faculty-financial.png',
        'Kopernyka Street, 3, Lviv, 79000, Ukraine', '(+38 032) 235-64-50, 235-86-54', 'financial.faculty@lnu.edu.ua'),
       ('Faculty of Geography', 'https://geography.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-geography.png',
        'Doroshenka Street, 41, Lviv, 79000, Ukraine', '(+38 032) 239 46 46, 239 41 62',
        'geography.faculty@lnu.edu.ua'),
       ('Faculty of Geology', 'https://geology.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-geology.png',
        'Mykhaila Hryshevskoho Street, 4, Lviv, 79005, Ukraine', '(+38 032) 261-60-56, 239-41-56',
        'decanat.geology@ukr.net'),
       ('Faculty of History', 'https://clio.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-clio.png',
        'Universytetska Street, 1, Lviv, 79000, Ukraine', '(+38 032) 226-10-328', 'clio@lnu.edu.ua'),
       ('Faculty of International Relations', 'https://intrel.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-intrel.png',
        'Sichovykh Striltsiv Street, 19, Lviv, 79000, Україна', '(+38 032) 272-79-73, 239-44-20, 239-47-48',
        'intrel.faculty@lnu.edu.ua'),
       ('Faculty of Journalism', 'https://journ.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-journ.png',
        'Henerala Chuprynky Street, 49, Lviv, 79044, Україна', '(+38 032) 239-47-51', 'journft@lnu.edu.ua'),
       ('Faculty of Law', 'https://law.lnu.edu.ua/en/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-law.png',
        'Sichovykh Striltsiv Street, 14, Lviv, 79000, Ukraine', '(+38 032) 239-41-02', 'law.faculty@lnu.edu.ua'),
       ('Faculty of Mechanics and Mathematics', 'https://new.mmf.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-mechmat.png',
        'Universytetska Street, 1, Lviv, 79000, Ukraine', '(+38 032) 260-00-09, 239-41-74, 239-47-43',
        'dmmf@lnu.edu.ua">dmmf@lnu.edu.ua'),
       ('Faculty of Pedagogical Education', 'https://pedagogy.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/03/logo-faculty-pedagogy.png',
        'Tuhan-Baranovskoho Street, 7, Lviv, 79000, Ukraine', '(+38 032) 239-42-30', 'pedagogy.faculty@lnu.edu.ua'),
       ('Faculty of Philology', 'https://philology.lnu.edu.ua/',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-philology.png',
        'Universytetska Street, 1, room 232, Lviv, 79000, Ukraine', '(+38 032) 255-41-33, 239-41-58, 239-41-88',
        'philology.faculty@lnu.edu.ua'),
       ('Faculty of Philosophy', 'https://filos.lnu.edu.ua/"',
        'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-filos.png',
        'Universytetska Street, 1, Lviv, 79001, Ukraine', '(+ 38 032) 239-45-79', 'dfilos@lnu.edu.ua');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('ultricies eu nibh quisque id justo', 5, '593-698-2104', 'sperillio0@sogou.com', 'http://dummyimage.com/215x165.png/ff4444/ffffff', 'https://technorati.com/fusce/posuere/felis/sed/lacus/morbi.js');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('erat eros viverra eget congue', 4, '637-652-3593', 'gkitchenside1@behance.net', 'http://dummyimage.com/213x117.png/ff4444/ffffff', 'https://alibaba.com/neque/aenean/auctor/gravida/sem.aspx');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('maecenas pulvinar lobortis est', 2, '724-275-5783', 'clyman2@biglobe.ne.jp', 'http://dummyimage.com/120x179.png/5fa2dd/ffffff', 'https://virginia.edu/quis.xml');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('blandit mi in porttitor pede justo', 5, '838-507-8329', 'mgowland3@va.gov', 'http://dummyimage.com/217x243.png/dddddd/000000', 'https://godaddy.com/habitasse/platea/dictumst/maecenas/ut/massa.png');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('dictumst aliquam augue quam', 5, '588-485-0380', 'rferminger4@irs.gov', 'http://dummyimage.com/139x220.png/dddddd/000000', 'https://instagram.com/vitae/consectetuer/eget/rutrum/at/lorem/integer.xml');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('nisl aenean lectus pellentesque eget', 2, '156-443-9959', 'imccaghan5@alibaba.com', 'http://dummyimage.com/210x178.png/5fa2dd/ffffff', 'https://vkontakte.ru/integer/ac/neque.js');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('id pretium iaculis', 2, '337-619-6171', 'mfryer6@soundcloud.com', 'http://dummyimage.com/225x111.png/dddddd/000000', 'http://whitehouse.gov/quam/pharetra/magna.png');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('justo morbi ut odio cras mi', 3, '181-527-7767', 'bstutard7@4shared.com', 'http://dummyimage.com/135x101.png/5fa2dd/ffffff', 'https://gravatar.com/est/lacinia/nisi.xml');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('et magnis dis', 3, '123-463-3692', 'lcouvet8@moonfruit.com', 'http://dummyimage.com/188x194.png/dddddd/000000', 'https://51.la/ut/volutpat/sapien/arcu.jsp');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('maecenas leo odio condimentum id', 1, '624-863-0631', 'btoland9@engadget.com', 'http://dummyimage.com/201x109.png/5fa2dd/ffffff', 'http://salon.com/scelerisque.js');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('mauris morbi non lectus aliquam', 3, '199-869-9858', 'hbyrama@hao123.com', 'http://dummyimage.com/213x121.png/5fa2dd/ffffff', 'http://dell.com/turpis/integer/aliquet/massa/id.js');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('aliquet massa id lobortis convallis', 1, '600-207-7162', 'aborleaceb@1und1.de', 'http://dummyimage.com/157x204.png/dddddd/000000', 'https://163.com/dapibus/nulla/suscipit/ligula/in.json');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('posuere cubilia curae', 4, '559-130-1997', 'ajobernec@xrea.com', 'http://dummyimage.com/249x141.png/cc0000/ffffff', 'http://symantec.com/non.json');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('et magnis dis parturient montes', 2, '825-552-4496', 'ulemard@homestead.com', 'http://dummyimage.com/233x146.png/dddddd/000000', 'http://nydailynews.com/rhoncus/aliquet/pulvinar/sed/nisl/nunc.json');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('eros viverra eget congue eget', 1, '720-788-4456', 'clinnye@mediafire.com', 'http://dummyimage.com/114x121.png/cc0000/ffffff', 'https://redcross.org/sit/amet/diam/in/magna/bibendum.jsp');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('aliquam augue quam sollicitudin', 1, '818-330-8930', 'rweddupf@chron.com', 'http://dummyimage.com/111x102.png/5fa2dd/ffffff', 'https://loc.gov/sem/sed/sagittis.js');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('porttitor pede justo eu massa', 3, '602-923-8777', 'fpoulterg@godaddy.com', 'http://dummyimage.com/239x133.png/cc0000/ffffff', 'http://opensource.org/porttitor/lorem/id/ligula/suspendisse/ornare.json');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('magna bibendum imperdiet', 4, '676-683-7309', 'zscourgieh@wunderground.com', 'http://dummyimage.com/245x187.png/5fa2dd/ffffff', 'http://flavors.me/id/massa/id/nisl/venenatis/lacinia.js');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('aliquam erat volutpat in congue etiam', 5, '638-825-3284', 'jbrearleyi@reddit.com', 'http://dummyimage.com/151x170.png/dddddd/000000', 'https://sphinn.com/vulputate/luctus/cum.png');
insert into departments.department (name, faculty_id, phone, email, image_url, url) values ('mauris viverra diam', 4, '293-235-0915', 'dmonkj@examiner.com', 'http://dummyimage.com/180x105.png/dddddd/000000', 'https://thetimes.co.uk/egestas.aspx');
insert into events.tag (name, color) values ('ameliorated', '#f63d42');
insert into events.tag (name, color) values ('support', '#041e24');
insert into events.tag (name, color) values ('disintermediate', '#2829d4');
insert into events.tag (name, color) values ('portal', '#da6f6b');
insert into events.tag (name, color) values ('proactive', '#d57357');
insert into events.tag (name, color) values ('upward-trending', '#e84b61');
insert into events.tag (name, color) values ('structure', '#6c7e9f');
insert into events.tag (name, color) values ('methodical', '#798bea');
insert into events.tag (name, color) values ('architecture', '#109388');
insert into events.tag (name, color) values ('advanced', '#100137');
insert into events.tag (name, color) values ('collaboration', '#6d11fa');
insert into events.tag (name, color) values ('versatile', '#169b93');
insert into events.tag (name, color) values ('decentralized', '#fdccc6');
insert into events.tag (name, color) values ('pricing', '#e86b4b');
insert into events.tag (name, color) values ('triple-buffered', '#905730');
insert into events.tag (name, color) values ('hierarchy', '#186ee4');
insert into events.tag (name, color) values ('directional', '#4e6f39');
insert into events.tag (name, color) values ('projection', '#d794ff');
insert into events.tag (name, color) values ('programmable', '#13164d');
insert into events.tag (name, color) values ('groupware', '#036de8');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (17, 'Nulla tellus.', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.', 'http://dummyimage.com/139x245.png/dddddd/000000', 7, '2024-01-08 16:54:47', '2024-01-10 01:22:47');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (11, 'Aliquam erat volutpat.', 'Vivamus vel nulla eget eros elementum pellentesque.', 'http://dummyimage.com/211x198.png/5fa2dd/ffffff', 6, '2023-10-01 11:22:30', '2023-10-02 22:52:30');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (14, 'Aenean lectus.', 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 'http://dummyimage.com/187x199.png/ff4444/ffffff', 11, '2023-11-28 09:18:56', '2023-11-28 19:09:56');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (12, 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Maecenas pulvinar lobortis est.', 'http://dummyimage.com/243x219.png/cc0000/ffffff', 20, '2024-12-22 23:52:28', '2024-12-23 13:48:28');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (11, 'Sed accumsan felis.', 'Morbi ut odio.', 'http://dummyimage.com/106x201.png/ff4444/ffffff', 5, '2024-12-11 03:54:51', '2024-12-11 13:43:51');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (13, 'Nulla mollis molestie lorem.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 'http://dummyimage.com/212x149.png/cc0000/ffffff', 14, '2024-06-10 17:20:10', '2024-06-11 16:16:10');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (16, 'Morbi non lectus.', 'Duis mattis egestas metus.', 'http://dummyimage.com/174x127.png/cc0000/ffffff', 15, '2024-01-23 01:41:49', '2024-01-23 05:25:49');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (12, 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'Aenean sit amet justo.', 'http://dummyimage.com/167x149.png/dddddd/000000', 19, '2025-07-06 18:24:26', '2025-07-07 21:54:26');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (13, 'Nunc purus.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', 'http://dummyimage.com/226x209.png/dddddd/000000', 11, '2025-10-01 23:37:49', '2025-10-02 20:25:49');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (15, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.', 'http://dummyimage.com/125x239.png/5fa2dd/ffffff', 12, '2025-09-13 03:00:43', '2025-09-13 19:37:43');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (11, 'Aenean sit amet justo.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', 'http://dummyimage.com/143x165.png/dddddd/000000', 20, '2023-05-20 01:20:50', '2023-05-21 06:31:50');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (17, 'Aenean sit amet justo.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.', 'http://dummyimage.com/131x131.png/cc0000/ffffff', 14, '2023-12-05 05:34:03', '2023-12-05 10:10:03');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (19, 'Ut at dolor quis odio consequat varius.', 'Integer ac leo. Pellentesque ultrices mattis odio.', 'http://dummyimage.com/160x114.png/dddddd/000000', 7, '2025-02-17 18:55:17', '2025-02-18 23:08:17');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (20, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', 'http://dummyimage.com/134x112.png/5fa2dd/ffffff', 20, '2024-05-02 09:28:09', '2024-05-03 08:32:09');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (14, 'Nulla mollis molestie lorem.', 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.', 'http://dummyimage.com/236x164.png/ff4444/ffffff', 17, '2023-03-09 19:58:46', '2023-03-10 17:40:46');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (19, 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'http://dummyimage.com/208x226.png/cc0000/ffffff', 13, '2024-09-21 21:56:43', '2024-09-22 22:29:43');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (12, 'Donec ut dolor.', 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', 'http://dummyimage.com/134x178.png/5fa2dd/ffffff', 18, '2025-12-21 01:03:59', '2025-12-21 16:05:59');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (12, 'Nunc purus.', 'Sed sagittis.', 'http://dummyimage.com/157x202.png/ff4444/ffffff', 18, '2025-06-13 07:40:57', '2025-06-14 02:27:57');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (20, 'Nullam sit amet turpis elementum ligula vehicula consequat.', 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'http://dummyimage.com/176x120.png/cc0000/ffffff', 8, '2023-09-10 10:22:08', '2023-09-11 06:48:08');
insert into events.event (creator_user_id, title, description, image_url, department_id, starts_at, ends_at) values (20, 'Nam dui.', 'Suspendisse potenti. Nullam porttitor lacus at turpis.', 'http://dummyimage.com/147x184.png/cc0000/ffffff', 12, '2025-02-24 02:46:20', '2025-02-24 21:25:20');
insert into events.event_tag (event_id, tag_id) values (10, 3);
insert into events.event_tag (event_id, tag_id) values (13, 8);
insert into events.event_tag (event_id, tag_id) values (1, 2);
insert into events.event_tag (event_id, tag_id) values (14, 14);
insert into events.event_tag (event_id, tag_id) values (4, 5);
insert into events.event_tag (event_id, tag_id) values (20, 1);
insert into events.event_tag (event_id, tag_id) values (13, 19);
insert into events.event_tag (event_id, tag_id) values (3, 6);
insert into events.event_tag (event_id, tag_id) values (3, 8);
insert into events.event_tag (event_id, tag_id) values (2, 1);
insert into events.event_tag (event_id, tag_id) values (9, 5);
insert into events.event_tag (event_id, tag_id) values (17, 1);
insert into events.event_tag (event_id, tag_id) values (2, 2);
insert into events.event_tag (event_id, tag_id) values (8, 13);
insert into events.event_tag (event_id, tag_id) values (10, 8);
insert into events.event_tag (event_id, tag_id) values (16, 2);
insert into events.event_tag (event_id, tag_id) values (1, 19);
insert into events.event_tag (event_id, tag_id) values (7, 3);
insert into events.event_tag (event_id, tag_id) values (9, 8);
insert into events.event_tag (event_id, tag_id) values (20, 17);
