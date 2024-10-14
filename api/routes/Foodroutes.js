import express from 'express';
import Food from '../models/Foodmodel.js';

const router = express.Router();

router.post("/addFood", async (req, res) => {
    try {
        const data = new Food(req.body);
        await data.save();
        res.status(201).json({ success: true, message: "Data created successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.get("/foodShow", async (req, res) => {
    try {
        const data = await Food.find({});
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/foodShow/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const foodItem = await Food.findById(id);
        if (!foodItem) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }
        res.json({ success: true, data: foodItem });
    } catch (error) {
        console.error('Error fetching food item:', error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

router.get("/foodCategory/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const foods = await Food.find({ category });
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching foods by category" });
    }
});

router.put("/foodUpdate/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedFood = await Food.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!updatedFood) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        res.json({ success: true, message: "Updated successfully", data: updatedFood });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while updating", error: error.message });
    }
});

router.delete("/foodDelete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Food.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }
        res.json({ success: true, message: "Deleted successfully", data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/foodCount", async (req, res) => {
    try {
        const foods = await Food.find({});
        res.json({ success: true, count: foods.length, data: foods });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "An error occurred while fetching food count" });
    }
});

export default router;
