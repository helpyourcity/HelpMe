INSERT INTO "Users" VALUES
(default, 'james', 'moore','hunter12', '1234567890', true, NOW(), NOW()),
(default, 'joshi', 'vallejo', 'hunter12', '4567890123', true, NOW(), NOW()),
(default, 'ross', 'wu', 'hunter12', '3126540987', true, NOW(), NOW()),
(default, 'alexis', 'okamura', 'hunter12', '9876541230', true, NOW(), NOW());

INSERT INTO "Locations" VALUES
(default, '123', 'Abcde St', null, null, 'Kapolei', 'HI', '96707', null, NOW(), NOW(), 2),
(default, '535', 'Tedfj St', null, null, 'Honolulu', 'HI', '96813', null, NOW(), NOW(), 3);

INSERT INTO "Rescues" VALUES
(default, 2, 3, NOW(), null, null, 'example message describing type of help needed', NOW(), NOW());

INSERT INTO "Messages" VALUES
(default, 'example text message number 1', 2, NOW(), NOW(), 1),
(default, 'example text number 2 message', 3, NOW(), NOW(), 1);