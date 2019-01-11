import * as React from "react";
import * as TransactionService from "../service/TransactionService";
import AddTransactionRequest from "src/service/Model/Request/AddTransactionRequest";
import Category from 'src/service/Model/Category';

interface ITransactionProps {
  categories: Category[]
}

class Transaction extends React.Component<ITransactionProps, any> {
  public addTransactionRequest: AddTransactionRequest

  constructor(props: any) {
    super(props);
    this.addTransactionRequest = new AddTransactionRequest();
  }

  public renderCategory = (): JSX.Element[] => {
    const toReturn: JSX.Element[] = [];
    let tCategories: JSX.Element[] = [];
    let index: number = 1;

    if(this.props.categories.length === 0) {
      return toReturn;
    }

    for(const cat of this.props.categories) {
      tCategories.push(<div key={ cat.name } className="column">{ cat.name }</div>);

      if(index % 2 === 0) {
        toReturn.push(<div key={ index } className="columns is-mobile">{ tCategories }</div>)
        tCategories = [];
      }

      index++;
    }

    if(tCategories.length > 0) {
      toReturn.push(<div key={ index } className="columns is-mobile">{ tCategories }</div>);
    }

    return toReturn;
  }

  public inputHandler = (event: any) => {
    this.addTransactionRequest[event.target.name] = event.target.value;
  }

  public addTransactionHandler = async () => {
    const response = await TransactionService.addTransaction(this.addTransactionRequest);

    if(response) {
      alert('Add transaction success');
    }
    else {
      alert('Add transaction failed');
    }
  }

  public render() {
    return (
      <div className="container is-fluid">
        <p style={{textAlign: "center"}}>Add Transaction</p>
        <p style={{textAlign: "center"}}>Category</p>
        <div className="container has-text-centered">
          { ...this.renderCategory() }
          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <input className="input is-rounded" name="amount" type="text" placeholder="Amount" onChange={ this.inputHandler }/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-rounded" name="date" type="date" onChange={ this.inputHandler }/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className="textarea" name="note" placeholder="Note" onChange={ this.inputHandler }/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary" onClick={ this.addTransactionHandler }>Add</button>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;