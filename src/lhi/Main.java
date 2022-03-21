
public class Main {
    public static void main(String[] args){
        int i = 0;
        int sum = 0;
        while(i<10){
            i++;
            System.out.println("11 i : " + i);
            if(i%2 == 1)
            continue;
            System.out.println("i : " + i);
            sum += i;
            
        }
        System.out.println(sum);
    }
}