

INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state)
VALUES (1000, 'FairField', false, 'surendransudheesan@gmail.com', 'Sudheesan', 'Surendran', 'Iowa');
INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, experience, state)
VALUES (2000, 'Fairfield', false, 'Amit@gmail.com', 'Amit', 'Gosh', '5 years', 'Iowa');
INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state)
VALUES (3000, 'FairField', false, 'maq.rony@gmail.com', 'Mak', 'Rony', 'Iowa');


Insert INTO faculty(department, id)values ('CSE','1000');
Insert INTO student(gpa, id)values (3.99,'2000');

INSERT INTO public.tag (id, deleted, tag) VALUES (1000, false, '.NET Core');
INSERT INTO public.tag (id, deleted, tag) VALUES (1001, false, 'JavaScript');
INSERT INTO public.tag (id, deleted, tag) VALUES (1002, false, 'Sprint Boot');
INSERT INTO public.tag (id, deleted, tag) VALUES (1003, false, 'Java');
INSERT INTO public.tag (id, deleted, tag) VALUES (1004, false, 'Angular');
INSERT INTO public.tag (id, deleted, tag) VALUES (1005, false, 'Python');


INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1001, 'Dover', 'Google', false, 'Java developers are needed.', 'Delaware', null, 3000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1002, 'Adams Morgan', 'Apple', false, 'IOS developers are needed.', 'District of Columbia', null, 3000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1003, 'Houston', 'Sysco LABS', false, 'We need React Js developers', 'Texas', null, 3000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1004, 'Alva', 'PayPal', false, 'We need java Javascript developers', 'Florida', null, 2000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1005, 'Houston', 'Tesla', false, 'We need Python Devs', 'Texas', null, 2000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1006, 'Dover', 'Meta', false, 'We need SpringBoot developers', 'Delaware', null, 2000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1007, 'Watertown', 'Relisource', false, 'We need .Net Developers', 'New York', null, 2000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1008, 'Avondale', 'Nasa', false, 'We need Java developers', 'Arizona', null, 2000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (1009, 'Manchester', 'New York Times', false, 'We need Angular Developers', 'New York', null, 3000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, title, posted_by_id)
VALUES (10010, 'Anoka County', 'Marvel', false, 'We need JS devs', 'Minnesota', null, 3000);


INSERT INTO public.job_tags (job_id, tags_id) VALUES (1001, 1002);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1001, 1003);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1002, 1000);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1002, 1001);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1003, 1001);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1004, 1001);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1005, 1005);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1006, 1002);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1007, 1000);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1008, 1003);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (1009, 1004);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (10010, 1001);
