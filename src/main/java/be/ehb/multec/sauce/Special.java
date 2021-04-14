package be.ehb.multec.sauce;

import be.ehb.multec.Fries;
import be.ehb.multec.SauceDecorator;

public class Special extends SauceDecorator {
    public Special(Fries fries) {
        super(fries);
        super.setDescription(" with special sauce");
    }

    @Override
    protected double cost() {
        return super.cost() + 1.50;
    }

    @Override
    protected double time() {
        return super.time() + 2;
    }

    @Override
    public String getDescription() {
        return super.fries.getDescription() + super.getDescription();
    }
}
