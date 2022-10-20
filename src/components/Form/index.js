import React, { useState } from "react";
import Grid from "../Grid"
import * as C from "./styles";

const Form = ({handleAdd, transactionList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.rando() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        };


        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };


  return (
    <>
    <C.Container>
        <C.ImputContent>
            <C.Label>Descrição</C.Label>
            <C.Input value={desc} onchange={(e) => setDesc(e.target.value)} />
        </C.ImputContent>

        <C.ImputContent>
            <C.Label>Valor</C.Label>
            <C.Input value={amount} type="number" onchange={(e) => setAmount(e.target.value)} />
        </C.ImputContent>
        <C.RadioGroup>
            <C.Imput type="radio" id="rIncome" defaultChecked name="group1" onchange={() => setExpense(!isExpense)}/>
            <C.Label htmlFor="rIncome">Entrada</C.Label>

            <C.Imput type="radio" id="rExpenses" defaultChecked name="group1" onchange={() => setExpense(!isExpense)}/>
            <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}> ADICIONAR </C.Button>
    </C.Container>
    <Grid itens={transactionList} setItens={setTransactionsList}/>
    </>
  );
};

export default Form