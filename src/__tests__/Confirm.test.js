import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Confirm from "../components/Reservation/Confirm";

describe('Confirm', () => {
    test("show the booking name", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "Admin";

        fireEvent.change(getByLabelText(/Booking Name/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));

        expect(onSubmit).toBeCalled();
    });

    test("show the booking email", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "admin@admin.com";

        fireEvent.change(getByLabelText(/Booking Email/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));

        expect(onSubmit).toBeCalled();
    });

    test("show the guest number", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "2";

        fireEvent.change(getByLabelText(/Number of Guest/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));


        expect(onSubmit).toBeCalled();
    });

    test("show special request of the guest", () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<Confirm onSubmit={onSubmit} />);
        const inputValue = "decorate the table nicely";

        fireEvent.change(getByLabelText(/request/i), { target: { value: inputValue } });
        fireEvent.click(getByText(/Confirm my booking/i));


        expect(onSubmit).toBeCalled();
    });
})