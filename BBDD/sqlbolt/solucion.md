# SQL Lesson 1: SELECT queries 101

Find the title of each film:
```sql
SELECT title FROM movies;
```
Find the director of each film:
```sql
SELECT director FROM movies;
```
Find the title and director of each film:
```sql
SELECT title, director FROM movies;
```
Find the title and year of each film:
```sql
SELECT title, year FROM movies;
```
Find all the information about each film:
```sql
SELECT * FROM movies;
```

# SQL Lesson 2: Queries with constraints (Pt. 1)

Find the movie with a row id of 6
```sql
SELECT * FROM movies WHERE id = 6;
```
Find the movies released in the years between 2000 and 2010
```sql
SELECT * FROM movies WHERE year BETWEEN 2000 and 2010;
```
Find the movies not released in the years between 2000 and 2010
```sql
SELECT * FROM movies WHERE NOT year BETWEEN 2000 and 2010;
```
Find the first 5 Pixar movies and their release year
```sql
SELECT title, year FROM movies WHERE id BETWEEN 1 and 5;
```

# SQL Lesson 3: Queries with constraints (Pt. 2)

Find all the Toy Story movies
```sql
SELECT * FROM movies WHERE title LIKE "Toy%";
```
Find all the movies directed by John Lasseter
```sql
SELECT * FROM movies WHERE director = "John Lasseter";
```
Find all the movies (and director) not directed by John Lasseter
```sql
SELECT * FROM movies WHERE NOT director = "John Lasseter";
```
Find all the WALL-* movies
```sql
SELECT * FROM movies WHERE title LIKE "Wall%";
```

# SQL Lesson 4: Filtering and sorting Query results

List all directors of Pixar movies (alphabetically), without duplicates
```sql
SELECT DISTINCT director FROM movies ORDER BY director; 
```
List the last four Pixar movies released (ordered from most recent to least)
```sql
SELECT * FROM movies ORDER BY year DESC LIMIT 4;
```
List the first five Pixar movies sorted alphabetically
```sql
SELECT * FROM movies ORDER BY title ASC LIMIT 5;
```
List the next five Pixar movies sorted alphabetically
```sql
SELECT * FROM movies ORDER BY title ASC LIMIT 5 OFFSET 5;
```

# SQL Review: Simple SELECT Queries

List all the Canadian cities and their populations
```sql
SELECT city, population FROM north_american_cities WHERE country = "Canada" ;
```
Order all the cities in the United States by their latitude from north to south
```sql
SELECT * FROM north_american_cities WHERE country LIKE "United%" ORDER BY latitude DESC ;
```
List all the cities west of Chicago, ordered from west to east
```sql
SELECT * FROM north_american_cities
WHERE longitude < (
  SELECT longitude FROM north_american_cities
  WHERE city = 'Chicago'
)
ORDER BY longitude;
```
List the two largest cities in Mexico (by population)
```sql
SELECT * FROM north_american_cities
WHERE country = "Mexico"
ORDER BY population DESC
LIMIT 2
```
List the third and fourth largest cities (by population) in the United States and their population
```sql
SELECT * FROM north_american_cities
WHERE country LIKE "United%"
ORDER BY population DESC
LIMIT 2
OFFSET 2
```
