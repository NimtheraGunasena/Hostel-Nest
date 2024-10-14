import express from 'express';
import Pickup from '../models/PickupModels.js';
import Food from '../models/Foodmodel.js';

const router = express.Router();

// Create a new pickup order
router.post('/addPickupDetails', async (req, res) => {
    try {
        const { foodItems, ...pickupData } = req.body;
        
        // Fetch food details and calculate total amount
        let totalAmount = 0;
        const processedFoodItems = await Promise.all(foodItems.map(async (item) => {
            const food = await Food.findById(item.foodId);
            if (!food) {
                throw new Error(`Food item with id ${item.foodId} not found`);
            }
            totalAmount += food.price * item.quantity;
            return {
                food: item.foodId,
                quantity: item.quantity
            };
        }));

        const pickup = new Pickup({
            ...pickupData,
            foodItems: processedFoodItems,
            totalAmount
        });

        await pickup.save();
        res.status(201).json({ success: true, message: "Pickup order created successfully" });
    } catch (error) {
        console.error('Error creating pickup order:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// Fetch pickup order history
router.get('/orderHistory', async (req, res) => {
    try {
        const orders = await Pickup.find().sort({ createdAt: -1 }).populate('foodItems.food');
        res.json({ success: true, orders });
    } catch (error) {
        console.error('Error fetching order history:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
