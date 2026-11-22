const addExpenseBtn=document.getElementById("add-expense-btn")
const addExpenseInput=document.getElementById("amount")
const addExpenseNameInput=document.getElementById("name")
const addExpensecategoryInput=document.getElementById("category")
const expensesList=document.getElementById("expenses-list")
const filter=document.getElementById("filter-category")
const searchBtn=document.getElementById("search-btn")


const expenses=[]
const addExpenseHandler=()=>{
    const newExpense={
        name:addExpenseNameInput.value,
        amount:addExpenseInput.value,
        category:addExpensecategoryInput.value
    }
    expenses.push(newExpense)
    renderExpense()
}
const renderExpense=(list=expenses)=>{
    let total=0
if(list.length===0){
        expensesList.classList.remove("visible")
}else{
    expensesList.classList.add("visible")
}
expensesList.innerHTML=""
list.forEach(expense=>{
       const expenseEl=document.createElement("li")
       let shownElement=expense.name
       shownElement+=expense.amount
       expenseEl.textContent=shownElement
       expensesList.append(expenseEl)
})
 evaluateTotal(list)
}
const evaluateTotal=(list=expenses)=>{
    let total=0
    for (const expense of list){
        let{amount:price}=expense
        total+=parseFloat(price)
    }
    const totalamount=document.createElement("li")
    totalamount.textContent=`total :${total}`
    expensesList.append(totalamount.textContent.toString())
}

const searchForExpenseHandler=()=>{
const filtered_list=[]
search_category=filter.value
 for (const expense of expenses) {
    let {category}=expense
    if(category.includes(search_category)){
       filtered_list.push(expense)
 }   
}
 renderExpense(filtered_list)
}
addExpenseBtn.addEventListener("click", addExpenseHandler)
searchBtn.addEventListener("click", searchForExpenseHandler)