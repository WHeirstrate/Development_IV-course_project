package be.ehb.multec.state;

import javax.naming.Context;

public class WaitForCookingState implements State {
    @Override
    public void doAction(Context context) {
    }

    @Override
    public String toString() {
        return "Your order is being processed...";
    }
}
