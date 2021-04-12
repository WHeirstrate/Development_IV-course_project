package be.ehb.multec;


public abstract class SauceDecorator extends Fries{

protected Fries fries;

protected SauceDecorator(Fries fries) { this.fries = fries; }

protected double cost() { return fries.cost(); }

protected double time() { return fries.time(); }
}
