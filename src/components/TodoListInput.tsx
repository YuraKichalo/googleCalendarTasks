import React, { useRef, useState } from 'react';
import { observer } from "mobx-react";
import store from '../stores/AppStore';

const TodoListInput: React.FC = observer(() => {
    const inputTextRef = useRef<HTMLInputElement>(null);
    const [inputError, setInputError] = useState(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        store.setInputVal(e.target.value);
    };

    const onFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const text = inputTextRef.current!.value;

        if (text) {
            store.addTask(text);
            store.setInputVal('');
            setInputError(false);
        } else {
            setInputError(true);
        }
    };

    const renderError = () => {
        if (inputError) {
            return <div className="ui pointing red basic label">You can't add empty task :(</div>
        }
    };

    const renderInput = () => {
        const className = inputError ? 'field error' : 'field';

        return (
            <div className={className}>
                <input
                    type='text'
                    placeholder='add task here...'
                    value={store.inputVal}
                    onChange={onInputChange}
                    ref={inputTextRef}
                />
                <div>{renderError()}</div>
            </div>
        );
    };

    return (
        <form className='ui form' onSubmit={onFormSubmit}>
            {renderInput()}
            <button className='ui button' type='submit'>Add</button>
        </form>
    )
});

export default TodoListInput;