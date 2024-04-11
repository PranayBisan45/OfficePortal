package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.model.appointment;
import com.demo.dao.AppointmentDao;

@Service
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmentDao adao;
	
	@Override
	public appointment appointment(com.demo.model.appointment a) {
		return adao.save(a);
	}

	@Override
	public boolean delete(int aid) {
		 int AffectedRow = adao.delete(aid);
		 if(AffectedRow>0) {
			 return true;
		 }
		 return false;
	}

	@Override
	public boolean update(int aid, String status) {
		int rowAffected = adao.update(aid,status);
		if(rowAffected >0) {
			return true;
		}
			return false;
	}

	@Override
	public List<appointment> getAll() {
		return adao.getAll();
	}

}