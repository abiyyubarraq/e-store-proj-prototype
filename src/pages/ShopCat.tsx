import React, { useEffect, useState } from "react"
import "../styles/shop.scss"
import Page from "../components/Page"
import { useParams, useLocation } from "react-router-dom"
import "../styles/shopcat.scss"
import CollectionItemCat from "../components/CollectionItemCat"
import { db, collection, getDocs } from "../firebase/firebase.utils"
import { fetchStart, fetchSuccess, fetchFail } from "../redux/Shop/shopSlice"
import { useAppSelector } from "../redux/hooks"
import { useAppDispatch } from "../redux/hooks"
import Loader from "../components/Loader"

function ShopCat() {
  const { catId } = useParams()
  const strgCatId = String(catId)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const shopState = useAppSelector((state) => state.shop)
  async function fetchData() {
    try {
      dispatch(fetchStart())
      // const docRef = collection(db, "SHOP_DATA")
      // // const q = query(docRef, where("routeName", "==", "hats"))
      // const querySnapshot = await getDocs(docRef)
      // const arr: any = []
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   arr.push(doc.data())
      // })
      // return arr

      await getDocs(collection(db, "SHOP_DATA")).then((querySnapshot) => {
        const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        dispatch(fetchSuccess(newData.filter((dat: any) => dat.routeName === strgCatId)))
        setIsLoading(false)
      })

      // const docRef = doc(db, "SHOP_DATA", "e05811e0-6b2a-11ed-834c-5b825b157adc")
      // const docSnap = await getDoc(docRef)
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data())
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!")
      // }
    } catch (error) {
      fetchFail(error)
      console.log("There was a problem.")
    }
  }
  useEffect(() => {
    fetchData()

    // .then(async (docarr) => {
    //   dispatch(fetchSuccess(docarr))
    // })
    // .catch((err) => {
    //   dispatch(fetchFail(err))
    // })
  }, [catId])
  if (isLoading)
    return (
      <Page title="...">
        <Loader />
      </Page>
    )
  let comp: any = []

  shopState.collection.forEach((p) => {
    comp = [comp, ...p.items.map((item) => <CollectionItemCat key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} />)]
  })

  return (
    <Page title={strgCatId.toUpperCase()}>
      <div className="CollectionPageContainer">
        <h2 className="CollectionTitle">{strgCatId.toUpperCase()}</h2>
        <div className="CollectionItemsContainer">{comp}</div>
      </div>
    </Page>
  )
}

export default ShopCat
