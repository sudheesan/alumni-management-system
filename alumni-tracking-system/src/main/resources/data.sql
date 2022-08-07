

INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state) VALUES (1, 'FairField', false, 'Shudishan@gmail.com', 'Shudishan', 'Sundor', 'Iowa');
INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state) VALUES (2, 'FairField', false, 'Amit@gmail.com', 'Amit', 'Gosh', 'Iowa');
INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state) VALUES (3, 'FairField', false, 'maq.rony@gmail.com', 'Mak', 'Rony', 'Iowa');


Insert INTO faculty(department, id)values ('CSE','1');
Insert INTO student(gpa, id)values (3.99,'2');

INSERT INTO public.tag (id, deleted, tag) VALUES (1, false, '.NET Core');
INSERT INTO public.tag (id, deleted, tag) VALUES (2, false, 'JavaScript');
INSERT INTO public.tag (id, deleted, tag) VALUES (3, false, 'Sprint Boot');
INSERT INTO public.tag (id, deleted, tag) VALUES (4, false, 'Java');

INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (1, null, 'ABC', false, 'Sprint boot developer', null, 1);
INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (3, 'Fairfield', 'Apple', false, 'Description of the Job', 'IOWA', 1);
INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (5, 'Fairfield', 'Google', false, 'Description of the Job 2', 'IOWA', 1);
INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (6, 'Fairfield', 'Google', false, 'Description of the Job 2', 'IOWA', 1);

INSERT INTO public.job_tags (job_id, tags_id) VALUES (3, 2);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (5, 4);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (6, 4);
