# Nivel básico: Consultas simples y selección de datos

1. **Consulta todas los datos de la tabla **film**

```sql
    SELECT * FROM film;
```

2. **Filtrado de datos**:
Encuentra todas las películas con una duración ( **length** ) mayor a 120
minutos.
Busca clientes cuyo apellido sea "Smith" en la tabla **customer** .

```sql

    SELECT * FROM film WHERE (
	length > 120
);

SELECT * FROM customer WHERE (
	last_name = "Smith"
);

```

3. **Ordenar datos**:
Ordena las películas de **film** alfabéticamente por el título.
Ordena las películas por duración de mayor a menor.

```sql
    SELECT * FROM film ORDER BY title asc;

    SELECT * FROM film ORDER BY length desc;
```

4. **Usar funciones agregadas**:
Cuenta cuántos actores hay en la tabla **actor** .
Encuentra la duración promedio de las películas en la tabla **film** .

```sql
    SELECT COUNT(*) AS number_actors from actor;

    SELECT AVG(length) as avg_length from film;
```

5. **Filtrar con operadores**:
Encuentra todas las películas con una clasificación ( rating ) de 'PG' o 'R'.
Muestra los clientes con last_name que terminen en "FORD".

```sql
    SELECT * FROM film WHERE (
	rating = "PG" OR rating = "R"
);

    SELECT * from customer WHERE (
	last_name LIKE "%ford"
);
```

# Nivel Intermedio: Relaciones y consultas con JOIN

6. **JOIN simple**:
Muestra el nombre completo de los actores y los títulos de las películas
en las que han actuado (usa las tablas **actor** ,
**film_actor** y **film** ).

```sql
    SELECT CONCAT(a.first_name, ' ', a.last_name) AS full_name, f.title AS film_title
    FROM actor a
    INNER JOIN film_actor fa ON a.actor_id = fa.actor_id
    INNER JOIN film f ON fa.film_id = f.film_id;
```