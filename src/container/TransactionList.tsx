import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { TransactionCard } from "../components/TransactionCard";
import { Transaction } from "../service/model/Transaction";
import { listTransactions } from "../service/TransactionService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./TransactionList.scss";
import Loading from "../components/bases/Loading";

interface TransactionListProps extends RouteComponentProps {
    wallet: string;
}

interface TransactionListParam {
    walletName: string;
}

export function TransactionList(props: TransactionListProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        listTransactions({
            wallet: !!props.wallet
                ? props.wallet
                : (props.match.params as TransactionListParam).walletName
        }).then(response => {
            var sortedItems = response.items.reverse();
            setTransactions(sortedItems);
            setIsLoading(false);
        });
    }, []);

    const cards = transactions.map((tx, index) => {
        const { date, amount, type, category, description } = tx;
        return (
            <TransactionCard
                date={date}
                amount={amount}
                type={type}
                category={category}
                description={description}
                key={index}
            />
        );
    });

    return isLoading ? (
        <Loading />
    ) : (
        <>
            <div className="transactionList__backIcon">
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </Link>
            </div>
            <div>{cards}</div>
        </>
    );
}

export default TransactionList;
