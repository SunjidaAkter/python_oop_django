// #include<bits/stdc++.h>
// using namespace std;
// #define ll long long
// #define all(X) (X).begin(), (X).end()
// #define pub push_back
// #define pob pop_back
// #define nl  '\n'
// #define c(x) cout<<x<<nl
// #define yes cout<<"YES"<<nl
// #define no cout<<"NO"<<nl
// #define Yes cout<<"Yes"<<nl
// #define No cout<<"No"<<nl
// typedef pair<int,int>pii;
// #define forl(ty,var,str,end) for(ty var=str; var<end; var++)
// # define FAST ios_base :: sync_with_stdio (false) ; cin.tie(0) ; cout.tie(0)
// const int N=1e5+5;
// int tree[3*N];
// void build(int node,int l,int r,int a[]){
//     if(l==r){
//         tree[node]=a[r];
//         return;
//     }
//     int leftNode=2*node;
//     int rightNode=leftNode+1;
//     int mid=(l+r)/2;
//     build(leftNode,l,mid,a);
//     build(rightNode,mid+1,r,a);
//     tree[node]=tree[leftNode]+tree[rightNode];//merge
// }
// void update(int node,int l,int r,int idx,int val){
//     if(idx<l||idx>r)return;
//     if(l==r&&idx==l){
//         tree[node]=val;
//         return;
//     }
//     int leftNode=2*node;
//     int rightNode=leftNode+1;
//     int mid=(l+r)/2;
//     update(leftNode,l,mid,idx,val);
//     update(rightNode,mid+1,r,idx,val);
//     tree[node]=tree[leftNode]+tree[rightNode];//merge
// }
// int query(int node,int l,int r,int x,int y){
//     if(x>r||y<l)return 0;
//     if(x<=l&&r<=y)return tree[node];
//     int leftNode=2*node;
//     int rightNode=leftNode+1;
//     int mid=(l+r)/2;
//     return query(leftNode,l,mid,x,y)+query(rightNode,mid+1,r,x,y);//merge
// }
// void solve(){
//     int n;cin>>n;
//     int a[n];
//     for(int i=0;i<n;i++)cin>>a[i];
//     build(1,0,n-1,a);//*O(nlogn)
//     int q;cin>>q;
//     while(q--){//*O(qlogn)
//         int t;cin>>t;
//         if(t==0){
//             int idx,val;cin>>idx>>val;
//             idx--;
//             update(1,0,n-1,idx,val);//O(logn)
//         }else{
//             int x,y;cin>>x>>y;
//             x--,y--;
//             cout<<query(1,0,n-1,x,y);//O(logn)
//         }
//     }
// }
// int main(){
//     FAST;
//     int t=1;
//     // cin>>t;
//     while(t--){
//         solve();
//     }
//     return 0;
// }
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
    ll n,q;cin>>n>>q;
    ll a[n];
    for(ll i=0;i<n;i++)cin>>a[i];
    ll pre[n+1]={0};
    pre[1]=a[0];
    for(ll i=0;i<n;i++){
        pre[i+1]=a[i]+pre[i];
    }
    while(q--){
        ll x,y;cin>>x>>y;
        cout<<pre[y]-pre[x-1]<<nl;
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