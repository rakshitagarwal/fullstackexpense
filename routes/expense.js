const express=require('express')
const router=express.Router()
const expenseController=require('../controllers/expense')
const Expense=require('../models/Expense')
router.post('/expense/add-expense',expenseController.addExpense)
router.get('/expense/get-expense',expenseController.getExpense)
router.delete('/expense/delete-expense/:id',expenseController.deleteExpense)
module.exports=router
  