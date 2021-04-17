package be.ehb.multec.size;

import be.ehb.multec.Fries;

public class Medium extends Fries {
    public Medium() {
        setDescription("medium fries");
    }

    @Override
    protected double cost() {
        return 3.10;
    }

    @Override
    protected double time() {
        return 3;
    }
}
