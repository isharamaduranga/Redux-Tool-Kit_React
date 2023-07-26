import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux";
import {counterActions} from "../Store/index";

/** Function Base Component - Redux(Using special Hooks) */
const Counter = () => {

    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);

    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }
  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

        {show &&  <div className={classes.value}>{counter}</div>}

        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>IncrementBy-5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

/** Class Base Component - Redux (Using "connect" function) */
/*class Counter extends Component{
    incrementHandler() {
        this.props.increment()
    }
    decrementHandler() {
        this.props.decrement();
    }
    toggleCounterHandler() {

    }
    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>

                <div>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>

                </div>

                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        );
    }
}
const mapStateToProps = state =>{
    return{
        counter:state.counter
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        increment: () => dispatch({type:'increment'}),
        decrement: () => dispatch({type:'decrement'}),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);*/



