package be.ehb.multec.state;

public class NotOrderedState implements State {

    @Override
    public String toString() {
        return "State: Your order is not yet processed. To order, execute 'order.start()'.";
    }
}
