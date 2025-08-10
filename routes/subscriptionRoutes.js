import { Router } from "express";

const subscriptionRouter = Router();

// Get all subscriptions
subscriptionRouter.get("/", (req, res) => {
    res.json({ title: "GET all subscriptions" });
});

// Get subscription details by ID
subscriptionRouter.get('/:id', (req, res) => {
    res.json({ title: "GET subscription details"});
});

// Create a subscription
subscriptionRouter.post('/', (req, res) => {
    res.json({ title: "CREATE subscription" });
});

// Update a subscription by ID
subscriptionRouter.put('/:id', (req, res) => {
    res.json({ title: "UPDATE subscription" });
});

// Delete a subscription by ID
subscriptionRouter.delete('/:id', (req, res) => {
    res.json({ title: "DELETE subscription" });
});

// Get subscriptions for a user
subscriptionRouter.get('/user/:id', (req, res) => {
    res.json({ title: "GET subscriptions for user" });
});

// Cancel a subscription by ID
subscriptionRouter.post('/:id/cancel', (req, res) => {
    res.json({ title: "CANCEL subscription"});
});

// Get upcoming renewals
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.json({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;