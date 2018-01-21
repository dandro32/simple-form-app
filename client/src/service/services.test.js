import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {submitData, getData} from './services';

describe('Services tests', () => {
    let mock = new MockAdapter(axios)

    beforeEach(() => {
        mock.reset()
    });

    it('should get data from getDataMethod', done => {
        const data = { data: 'test' };
        mock.onGet('http://localhost:3005/submit').reply(200, data);

        getData().then(response => {
            expect(response).toEqual(data);
            done();
        });
    });

    it('should submit data using submitData', done => {
        const spy = jest.spyOn(window, 'alert');
        const data = { data: {message: 'test' }};
        mock.onPost('http://localhost:3005/submit').reply(200, data);

        submitData({value: "testValue"})
            .then((res) => {
            expect(spy).toHaveBeenCalled();
            done();
        });
    });

});