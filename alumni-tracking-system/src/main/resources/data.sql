

INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state) VALUES (1000, 'FairField', false, 'Shudishan@gmail.com', 'Shudishan', 'Sundor', 'Iowa');
INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state) VALUES (2000, 'FairField', false, 'Amit@gmail.com', 'Amit', 'Gosh', 'Iowa');
INSERT INTO public.table_user (id, city, deleted, email, first_name, last_name, state) VALUES (3000, 'FairField', false, 'maq.rony@gmail.com', 'Mak', 'Rony', 'Iowa');


Insert INTO faculty(department, id)values ('CSE','1000');
Insert INTO student(gpa, id)values (3.99,'2000');

INSERT INTO public.tag (id, deleted, tag) VALUES (1000, false, '.NET Core');
INSERT INTO public.tag (id, deleted, tag) VALUES (2000, false, 'JavaScript');
INSERT INTO public.tag (id, deleted, tag) VALUES (3000, false, 'Sprint Boot');
INSERT INTO public.tag (id, deleted, tag) VALUES (4000, false, 'Java');

INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (1000, null, 'ABC', false, 'Sprint boot developer', null, 1000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (3000, 'Fairfield', 'Apple', false, 'Description of the Job', 'IOWA', 1000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (5000, 'Fairfield', 'Google', false, 'Description of the Job 2', 'IOWA', 1000);
INSERT INTO public.job (id, city, company_name, deleted, description, state, posted_by_id) VALUES (6000, 'Fairfield', 'Google', false, 'Description of the Job 2', 'IOWA', 1000);

INSERT INTO public.job_tags (job_id, tags_id) VALUES (3000, 2000);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (5000, 4000);
INSERT INTO public.job_tags (job_id, tags_id) VALUES (6000, 4000);
