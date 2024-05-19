const pool = require('../config/db');

// Get all restaurants
const getRestaurants = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM restaurants');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM restaurants WHERE restaurant_id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getRestaurants,
    getRestaurantById,
};