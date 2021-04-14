package be.ehb.multec.size;

import be.ehb.multec.Fries;

public class Family extends Fries {
    public Family() {
        setDescription("Family fries");
    }

    @Override
    protected double cost() {
        return 5.10;
    }

    @Override
    protected double time() {
        return 3;
    }
}
