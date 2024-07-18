import MessageTable from '@/components/blocks/MessageTable';
import CPagiLimitCtrl from '@/components/shared/PagiLimitCtrl';
import CPagiPageCtrl from '@/components/shared/PagiPageCtrl';
import { actions } from '@/models/slices/SliceMessage';
import { useAppDispath, useAppSelector } from '@/models/store';
import { TApi } from '@/models/types';
import { IMessage } from '@/models/types/TMessage';
import { useCallback, useEffect, useMemo, useState } from 'react';

const PAGE = 1;
const LIMIT = 20;

const PMessage = () => {
  const dispath = useAppDispath();
  const messages = useAppSelector((state) => state.message.messages);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(LIMIT);
  const [currentPage, setCurrentPage] = useState(PAGE);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchMsgs = useCallback((limit: number, page: number) => {
    setIsLoading(true);
    void dispath(actions.LIST_MSG({ limit: limit, page: page })).then((res) => {
      setIsLoading(false);
      const total = (res.payload as TApi<IMessage>).total ?? 0;
      setTotalItem(total);
      setTotalPage(Math.ceil(total / limit));
    });
  }, []);

  useEffect(() => {
    fetchMsgs(limit, currentPage);
  }, [currentPage, limit]);

  const limitChange = useCallback((val: number) => {
    // * reset currentPage on limit change
    setCurrentPage(1);
    setLimit(val);
  }, []);

  const _limitCtrl = useMemo(() => {
    return <CPagiLimitCtrl total={totalItem} limit={limit} onLimitChange={limitChange} />;
  }, [totalItem]);

  const _pageCtrl = useMemo(() => {
    return <CPagiPageCtrl currentPage={currentPage} totalPage={totalPage} onPageChange={setCurrentPage} />;
  }, [currentPage, totalPage]);

  return (
    <>
      <MessageTable isLoading={isLoading} messages={messages} limitCtrl={_limitCtrl} pageCtrl={_pageCtrl} />
    </>
  );
};

export default PMessage;
