# Next.js Prisma Template

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), integrated with [Prisma](https://www.prisma.io/) for database management.

## Features

- Next.js 13+ with App Router
- TypeScript
- Prisma ORM
- SQLite database (easily adaptable to other databases)
- Basic CRUD operations setup

## Getting Started

To use this template, click the "Use this template" button on GitHub to create a new repository based on this template.

After creating your new repository, clone it to your local machine:
bash git clone https://github.com/yourusername/your-repo-name.git cd your-repo-name


Install the dependencies:
```bash 
npm install
````


Set up your database:

1. Update the `DATABASE_URL` in the `.env` file to point to your database.
2. Run the Prisma migration to create your database schema:
   ```bash 
   npx prisma migrate dev --name init
   ```


3. Generate the Prisma client:
   ```bash 
   npx prisma generate
   ```


Run the development server:
```bash 
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app`: Contains the Next.js application pages and API routes
- `/prisma`: Contains the Prisma schema and migrations
- `/src/components`: React components
- `/src/lib`: Utility functions and shared code

## Database Operations

This template includes basic CRUD operations. You can find examples in the API routes located in the `/src/app/api` directory.

## Customizing the Schema

To modify the database schema:

1. Edit the `prisma/schema.prisma` file
2. Run `npx prisma migrate dev --name your_migration_name` to create a new migration
3. Run `npx prisma generate` to update the Prisma client

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
