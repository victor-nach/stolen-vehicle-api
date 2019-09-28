import dotenv from 'dotenv';
import { hashPassword } from '../../utils';

dotenv.config();
let seedersQuery;

if (process.env.NODE_ENV === 'test') {
  seedersQuery = `
    INSERT INTO users ( "email", "firstName", "lastName", "hashedPassword", "role", "designation")
      VALUES ('superAdmin@gmail.com', 'clifford', 'chibuike', '${hashPassword('password')}', 'superAdmin', 'police'),       
        ('admin@gmail.com', 'john', 'doe', '${hashPassword('password')}', 'admin', 'web manager'); 
    
    INSERT INTO vehicles ( "userId", "ownerFirstName", "ownerLastName", "ownerEmailAddress", "ownerPhoneNumber", "vehicleChassisNumber", "make", "model", "year", "color", "location", "description")
    VALUES (1, 'onome', 'chidi', 'gavem@gmail.com', 0912312332, '1GBEK12ZX2R298984', 'toyota', 'avalon', 2017, 'blue', 'lagos', 'the car was stolen at 9:30 pm at gunpoint in the front of the checker and from there it was towed to the nex spot for futher checking'),       
    (1, 'clifford', 'bolu', 'bulo@gmail.com', 0345412332, '1GNEK12ZX2R298984', 'honda', 'accord', 2017, 'blue', 'lagos', 'the car was stolen at 9:30 pm at gunpoint in the front of the checker and from there it was towed to the nex spot for futher checking'),
    (1, 'victor', 'frank', 'hande@gmail.com', 09354512332, '1REGL12ZX2R298984', 'nissan', 'blubird', 2017, 'blue', 'lagos', 'the car was stolen at 9:30 pm at gunpoint in the front of the checker and from there it was towed to the nex spot for futher checking'),
    (2, 'emma', 'jude', 'jadm@gmail.com', 09134543332, '1FLET12ZX2R293453', 'toyota', 'strema', 2017, 'blue', 'lagos', 'the car was stolen at 9:30 pm at gunpoint in the front of the checker and from there it was towed to the nex spot for futher checking'),
    (1, 'johnson', 'sharon', 'adfnsfe@gmail.com', 091353332, '1QLOP12ZX2R293436', 'lexus', 'gx35', 2017, 'blue', 'lagos', 'the car was stolen at 9:30 pm at gunpoint in the front of the checker and from there it was towed to the nex spot for futher checking'),
    (2, 'anna', 'mike', 'asfdink@gmail.com', 0913536332, '1PLDI12ZX2R234534', 'toyota', 'corolla', 2017, 'blue', 'lagos', 'the car was stolen at 9:30 pm at ilasa maja stop in the front of the checker and from there it was towed to the nex spot for futher checking'); 
`;
}
if (process.env.NODE_ENV === 'production') {
  seedersQuery = '';
}

const seeders = seedersQuery;
export default seeders;
