import React from 'react';
import { ContainerLoading, LinhaLoading, SpanLoading } from './styled';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loading = () => {
    return (
        <ContainerLoading>
            <LinhaLoading>
                <ClipLoader size={30} color={'#ff4c3b'} loading={true} />
            </LinhaLoading>
            <LinhaLoading>
                <SpanLoading>Loading...</SpanLoading>
            </LinhaLoading>
        </ContainerLoading>
    );
};

export default Loading;
