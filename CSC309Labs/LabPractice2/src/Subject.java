public interface Subject {
    public void registerapp(MyObserver myobserver);
    public void removeapp(MyObserver myObserver);
    public void notifyapp();
}
