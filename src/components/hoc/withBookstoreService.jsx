import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";

export default function withBookstoreService() {
  return Wrapped => props => (
    <BookstoreServiceConsumer>
      {bookstoreService => {
        return <Wrapped {...props} bookstoreService={bookstoreService} />;
      }}
    </BookstoreServiceConsumer>
  );
}
