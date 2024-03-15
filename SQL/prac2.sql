/*Find the names of the customer that are not referred by the customer with id = 2.

Return the result table in any order.

The result format is in the following example.*/
-- Write your PostgreSQL query statement below
SELECT name FROM customer
WHERE referee_id != 2 or referee_id is null
