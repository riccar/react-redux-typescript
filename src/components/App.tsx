import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

/***
 * Annotate mapStateToProps using the StoreState interface as state type
 * and describing the return value using the Todo interface
 */
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

/**
 * Above function is equivalent to destruct the state as follow
 */

const mapStateToPropsDestructed = ({
  todos
}: StoreState): { todos: Todo[] } => {
  return { todos };
};

/**
 * If you want to follow Typescript convention about not using default export,
 * rename the app class and use a simple export
 */

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);
