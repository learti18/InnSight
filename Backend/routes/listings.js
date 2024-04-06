import express from "express";

import { addListing, deleteListing, getListing, getListings, updateListing } from "../controllers/listings.js";

const router = express.Router()

router.get("/", getListings)
router.get("/:id", getListing)
router.post("/", addListing)
router.delete("/:id", deleteListing)
router.put("/:id", updateListing)

export default router