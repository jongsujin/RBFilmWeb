import { NextApiRequest, NextApiResponse } from "next";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(
        collection(db, "PORTFOLIO_COLLECTION"),
      );
      querySnapshot.forEach((doc) => {
        return res.status(200).json(doc.data());
      });
    } catch (err) {
      res.status(500).json({ message: "불러오기 실패" });
    }
  }
};

export default handler;
