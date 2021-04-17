package be.ehb.multec.size;

import be.ehb.multec.Fries;

public class Small extends Fries {
    public Small() {
        setDescription("small fries");
    }

    @Override
    protected double cost() {
        return 2.10;
    }

    @Override
    protected double time() {
        return 3;
    }
}
