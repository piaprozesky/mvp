DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS applicants;

CREATE TABLE posts (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    company VARCHAR(255), 
    title VARCHAR(255), 
    postdescription VARCHAR(255), 
    filled TINYINT
    );

INSERT INTO posts (
    company, title, postdescription, filled
    ) VALUES 
        ('This one', 'internship', 'this is the description for an intership at this company where you will learn to do this and this...', 0),
 	    ('Woolworths', 'job shadow store manager', 'Enjoy the constantia moms!', 0), 
        ('Takealot', 'box packer internship', 'learn how to choose the correct box size', 0); 


CREATE TABLE applicants (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    applicantname VARCHAR(255), 
    email VARCHAR(255), 
    cv VARCHAR(255)
    );

INSERT INTO applicants (
    applicantname, email, cv
    ) VALUES 
        ('bob', 'email@email.com', 'https://careerprofessor.works/?da_image=vietnam-cv-sample'),
        ('Spencer Reid', 'spencerreid@bau.com', 'https://cv-nation.com/blogs/news/how-to-write-a-cv-for-jobs-in-spain-with-spanish-cv-examples'),
        ('Jane Doe', 'anonymous@gmail.com', 'https://zety.com/cv-examples');

