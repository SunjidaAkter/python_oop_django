#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define all(X) (X).begin(), (X).end()
#define nl '\n'
#define yes cout<<"YES"<<nl
#define no cout<<"NO"<<nl
#define Yes cout<<"Yes"<<nl
#define No cout<<"No"<<nl
#define FAST ios_base :: sync_with_stdio (false) ; cin.tie(0) ; cout.tie(0)
typedef pair<ll,ll>pii;
void solve(){
    string s;cin>>s;
    ll l=0,r=0,cnt=0;
    string str="";
    vector<string>v;
    for(ll i=0;i<s.size();i++){
        str+=s[i];
        if(s[i]=='L')l++;
        if(s[i]=='R')r++;
        if((l==r)){
            cnt++;
            v.push_back(str);
            str="";
        }
    }
    // v.push_back(str);
    cout<<cnt<<nl;
    for(string val:v){
        cout<<val<<nl;
    }
}
int main(){
    FAST;
    int t=1;
    // cin>>t;
    while(t--){
        solve();
    }
    return 0;
}