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
        ('Company 1', 'Marketing Internship', 'Company is looking for a qualified intern to join our marketing/advertising team. Our marketing department produces quality work for major companies in the Boston area and seeks an intern who can participate in various stages of print and online marketing campaigns. This intern should be prepared to work in a fast-paced team environment and will finish the internship having gained broad experience in various aspects of marketing..', 0),
 	    ('Company 2', 'Graphic Design Internship', 'Are you a student interested in building real-world graphic design experience with an award-winning team? We’re a forward-thinking advertising agency looking for a talented and knowledgeable designer with fresh, creative ideas and an excellent eye for detail. Come work for one of the area’s leading advertising agencies and learn from some of the best in the business.', 0), 
        ('Company 3', 'Software Engineering Internship', 'Company seeks an intern with experience in software design, coding and debugging. The intern will gain exciting real-world software engineering experience at a thriving company. We frequently work in small teams to solve problems, explore new technologies, and learn from one another. The ideal intern for this environment will be enthusiastic and collaborative.

', 0); 

INSERT INTO applicants (
    applicantname, email, cv
    ) VALUES 
        ('Robert Williams', 'bobwilliams@gmail.com', 'https://www.visualcv.com/static/180cf399a0d092149a8d8bcabda87150/11958/uk-flag-image.png'),
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

