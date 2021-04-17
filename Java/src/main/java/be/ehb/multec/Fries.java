package be.ehb.multec;


public abstract class Fries {

    protected String description;

    protected abstract double cost();

    protected abstract double time();

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    //testcomment
}
