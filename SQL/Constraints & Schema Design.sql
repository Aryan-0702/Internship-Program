-- Step 1: Create users table with Primary Key, Unique email, Not Null password

CREATE TABLE users(
    user_id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Step 2: Create orders table

CREATE TABLE orders(
    order_id INT PRIMARY KEY,
    user_id INT,
    order_amount DECIMAL(10,2)
);

-- Step 3: Add foreign key constraint

ALTER TABLE orders
ADD CONSTRAINT FK_UserOrder
FOREIGN KEY (user_id)
REFERENCES users(user_id);

-- Step 4: Create index for faster email search

CREATE INDEX idx_users_email
ON users(email);


-- Step 5: Create view showing user order summary

-- Create view showing user order summary

GO
CREATE VIEW user_order_summary AS
SELECT 
    u.user_id,
    u.email,
    COUNT(o.order_id) AS total_orders,
    SUM(o.order_amount) AS total_spent
FROM users u
LEFT JOIN orders o
ON u.user_id = o.user_id
GROUP BY u.user_id, u.email;
GO

-- Step 6: Insert sample users

INSERT INTO users VALUES
(1,'aryan@gmail.com','pass123'),
(2,'rahul@gmail.com','rahul@123'),
(3,'priya@gmail.com','priya@456');

-- Step 7: Insert sample orders

INSERT INTO orders VALUES
(101,1,500.00),
(102,1,1200.00),
(103,2,750.00),
(104,3,300.00),
(105,1,150.00);

-- Step 8: View user order summary

SELECT * FROM user_order_summary;