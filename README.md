# PrintShelf
A 3D print logger where you can store information (like name, STL file, GCODE file, notes and so) about the print.

# Setting up
**Requirements:**
- Nodejs
- pnpm
- Basic terminal knowlage


After cloning the repo you can install the dependencies with
```bash
pnpm install
```
Then after putting in a `DATABASE=file:./database.db` into your .env file you can create the db with
```bash
npx prisma migrate dev
npx prisma generate
```
Then you are good to go. You can start it with:
```bash
pnpm dev
```
