public class HelloWorld {
    static int nSize = 4;
    public static void main(String[] args) {
        // System.out.println("Hello World");
        int[] arr = new int[nSize];
        makeAr(arr);
        for (int i = 0; i < nSize; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void makeAr(int[] arr){
        for (int i = 0; i < nSize; i++) {
                arr[i] = i;
        }
    }
}