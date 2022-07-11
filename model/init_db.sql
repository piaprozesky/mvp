SET foreign_key_checks = 0;

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS applicants;
DROP TABLE IF EXISTS posts_applicants;

SET foreign_key_checks = 1;


CREATE TABLE posts (
	post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	company VARCHAR(255),
	title VARCHAR(255),
	postdescription VARCHAR(2000),
	filled TINYINT
);

CREATE TABLE applicants (
	applicant_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	applicantname VARCHAR(255),
	email VARCHAR(255),
	cv VARCHAR(255)
);

CREATE TABLE posts_applicants (
	ref_post_id INT,
	ref_applicant_id INT,
    accepted INT
);


ALTER TABLE posts_applicants ADD CONSTRAINT posts_applicants_fk0 FOREIGN KEY (ref_post_id) REFERENCES posts(post_id);

ALTER TABLE posts_applicants ADD CONSTRAINT posts_applicants_fk1 FOREIGN KEY (ref_applicant_id) REFERENCES applicants(applicant_id);


 INSERT INTO posts (
    company, title, postdescription, filled
    ) VALUES 
        ('This one', 'internship', 'this is the description for an intership at this company where you will learn to do this and this...', 0),
 	    ('Woolworths', 'job shadow store manager', 'Enjoy the constantia moms!', 0), 
        ('Takealot', 'box packer internship', 'learn how to choose the correct box size', 0); 

INSERT INTO applicants (
    applicantname, email, cv
    ) VALUES 
        ('bob', 'email@email.com', 'https://careerprofessor.works/?da_image=vietnam-cv-sample'),
        ('Spencer Reid', 'spencerreid@bau.com', 'https://cv-nation.com/blogs/news/how-to-write-a-cv-for-jobs-in-spain-with-spanish-cv-examples'),
        ('Jane Doe', 'anonymous@gmail.com', 'https://zety.com/cv-examples');

INSERT INTO posts_applicants (
    ref_post_id, ref_applicant_id, accepted
    ) VALUES 
		(1,1,0), 
		(1,2,0), 
		(1,3,0), 
		(2,1,0), 
		(3,1,0), 
		(3,3,0);

