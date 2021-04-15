package be.ehb.multec.state;

import javax.naming.Context;

public class CookingState implements State {
    @Override
    public void doAction(Context context) {
        System.out.println("Order is cooking!");
        //context.setState(this);
    }

    @Override
    public String toString() {
        return "Cooking";
    }
}
