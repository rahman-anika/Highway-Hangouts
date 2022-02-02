import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Confirm from "../components/Reservation/Confirm";

<<<<<<< HEAD
describe('Confirm', () =>
{
    test("show the booking name", () =>
    {
=======
describe('Confirm', () => {
    test("show the booking name", () => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "Admin";

        fireEvent.change(getByLabelText(/Booking Name/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));

        expect(onSubmit).toBeCalled();
    });

<<<<<<< HEAD
    test("show the booking email", () =>
    {
=======
    test("show the booking email", () => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "admin@admin.com";

        fireEvent.change(getByLabelText(/Booking Email/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));

        expect(onSubmit).toBeCalled();
    });

<<<<<<< HEAD
    test("show the guest number", () =>
    {
=======
    test("show the guest number", () => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "2";

        fireEvent.change(getByLabelText(/Number of Guest/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));


        expect(onSubmit).toBeCalled();
    });

<<<<<<< HEAD
    test("show special request of the guest", () =>
    {
=======
    test("show special request of the guest", () => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "decorate the table nicely";

        fireEvent.change(getByLabelText(/request/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));


        expect(onSubmit).toBeCalled();
    });
<<<<<<< HEAD
})

=======
})
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
