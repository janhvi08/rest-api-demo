
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        string x;
        cin>>x;
        int i,a=0,b=0;
        for(i=0;i<n;i++) 
        {
            if(x[i]=='0'){
                a++;
            }
            else{
                b++;
            }
        }
        if(n%2==0){
        if(a%2==0 && b%2==0){
            cout<<"Yes"<<endl;
        }
        else{
            cout<<"No"<<endl;
        }
    }
    else if(n%2!=0){
        cout<<"Yes"<<endl;
    }
}
}